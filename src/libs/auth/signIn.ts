import { publicHttp } from "%/http";
import * as QueryString from "qs";
import { signInWithPopup, OAuthProvider } from "firebase/auth";
import { auth } from "%/firebase";
export interface KakaoRequest {
  code: string | null;
}

interface KakaoResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
  id_token: string;
}

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_KEY
}&redirect_uri=${
  import.meta.env.VITE_KAKAO_REDIRECT
}&response_type=code&scpoe=openid`;

export const signInForKakao = async ({ code }: KakaoRequest) => {
  // signInWithPopup(auth, provider)
  const res = await publicHttp.post<KakaoResponse>(
    "https://kauth.kakao.com/oauth/token",
    QueryString.stringify({
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_KAKAO_KEY,
      redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT,
      client_secret: import.meta.env.VITE_KAKAO_SECRET,
      code,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  const provider = new OAuthProvider("oidc.kakao");
  provider.credential({
    idToken: res.data.id_token,
  });
  const { user } = await signInWithPopup(auth, provider);
  return user;
  // return publicHttp.get<{ id: string }>('https://kapi.kakao.com/v2/user/me', {
  //     headers: {
  //         Authorization: `Bearer ${res.data.access_token}`,
  //     },
  // })
};
