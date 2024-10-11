# 임시 메모

## chmod, pocketbase serve

```
cd C:\JnJ-soft\Projects\external\next-kmc-web-app

pocketbase serve --dir="C:\JnJ-soft\Projects\external\next-kmc-web-app\backend\db\pocketbase\sqlite"


sudo chmod -R 777 /Users/youchan/Dev/Jnj-soft/Projects/external/next-kmc-web-app

pocketbase serve --dir="/Users/youchan/Dev/Jnj-soft/Projects/external/next-kmc-web-app/backend/db/pocketbase/sqlite"


## google login

```
Google 프로필 정보: {
  iss: 'https://accounts.google.com',
  azp: '126851762056-8s8mni887gt5abor3i891nsk3c5t1oma.apps.googleusercontent.com',
  aud: '126851762056-8s8mni887gt5abor3i891nsk3c5t1oma.apps.googleusercontent.com',
  sub: '110913229824758703988',
  email: 'jnjsoft.kmc@gmail.com',
  email_verified: true,
  at_hash: '7n4TK4VJvRUPzTOrecQiGg',
  name: 'Kmc Jnj',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocJdcm7PowY8Pu4Eqty6Bm2XVLcbEDl4PUxK8ewjOb7CUR0kYw=s96-c',
  given_name: 'Kmc',
  family_name: 'Jnj',
  iat: 1728568238,
  exp: 1728571838
}
```

## naver login
```
네, 네이버 로그인을 구현하겠습니다. Next.js와 NextAuth를 사용하여 네이버 로그인을 추가하는 과정은 다음과 같습니다:
먼저, 네이버 개발자 센터에서 애플리케이션을 등록해야 합니다.
NextAuth 설정 파일을 수정합니다.
3. 환경 변수를 추가합니다.
다음은 각 단계별 상세 내용입니다:
네이버 개발자 센터 (https://developers.naver.com/apps/#/register) 에서 애플리케이션을 등록합니다:
애플리케이션 이름을 입력합니다.
"네이버 로그인" 서비스를 선택합니다.
로그인 오픈 API 서비스 환경의 "PC 웹" 항목에 체크합니다.
서비스 URL과 Callback URL을 입력합니다 (예: http://localhost:3000 및 http://localhost:3000/api/auth/callback/naver).
NextAuth 설정 파일 (src/app/api/auth/[...nextauth]/route.ts 또는 pages/api/auth/[...nextauth].ts)을 수정합니다:
```


```
네이버 로그인

next-kmc-web-app

권한	필수	추가
회원이름		
연락처 이메일 주소(O)
별명		
프로필 사진		
성별		
생일		
연령대		
출생연도		
휴대전화번호		
```

```
Naver 프로필 정보: {
  resultcode: '00',
  message: 'success',
  response: {
    id: '8Uc_8hXip3BwRqS-aLzSsr72K9H7EqratNAXb4nfLdI',
    nickname: '시옷사랑',
    profile_image: 'https://phinf.pstatic.net/contact/55/2015/12/22/monwater_1450747348790.jpg',
    age: '50-59',
    gender: 'M',
    email: 'deverlife@gmail.com',
    mobile: '010-8242-2032',
    mobile_e164: '+821082422032',
    name: '문정삼',
    birthday: '12-25',
    birthyear: '1968'
  }
}
```

```
// Naver 프로필 정보 처리
if (account.provider === "naver") {
  // console.log("Naver 프로필 정보:", profile);
  email = (profile as any).response?.email || user.email;
  name = (profile as any).response?.name || user.name;
  image = (profile as any).response?.profile_image || user.image;
}
```

## kakao login

```
NextAuth와 함께 Kakao 로그인을 구현하는 과정은 다음과 같습니다:
Kakao Developers에서 애플리케이션 등록
NextAuth 설정에 Kakao 프로바이더 추가
환경 변수 설정
로그인 버튼 추가
각 단계를 자세히 살펴보겠습니다:
Kakao Developers에서 애플리케이션 등록:
https://developers.kakao.com/ 에 접속하여 로그인합니다.
'내 애플리케이션' 메뉴에서 '애플리케이션 추가하기'를 클릭합니다.
앱 이름을 입력하고 생성합니다.
'플랫폼' 설정에서 'Web' 플랫폼을 추가하고, 사이트 도메인을 등록합니다 (예: http://localhost:3000).
'카카오 로그인' 메뉴에서 '활성화 설정'을 켭니다.
'동의항목'에서 필요한 항목(이메일 등)을 설정합니다.
'보안' 메뉴에서 '클라이언트 시크릿'을 생성합니다.
'카카오 로그인' 메뉴의 '설정' 탭에서 '로그인 Redirect URI'를 추가합니다 (예: http://localhost:3000/api/auth/callback/kakao).
```


```
Kakao 프로필 정보: {
  id: 1566231751,
  connected_at: '2020-12-18T05:17:33Z',
  properties: {
    nickname: '문정삼',
    profile_image: 'http://img1.kakaocdn.net/thumb/R640x640.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg',
    thumbnail_image: 'http://img1.kakaocdn.net/thumb/R110x110.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg'
  },
  kakao_account: {
    profile_needs_agreement: false,
    profile: {
      nickname: '문정삼',
      thumbnail_image_url: 'http://img1.kakaocdn.net/thumb/R110x110.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg',
      profile_image_url: 'http://img1.kakaocdn.net/thumb/R640x640.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg',
      is_default_image: true,
      is_default_nickname: false
    },
    has_email: true,
    email_needs_agreement: false,
    is_email_valid: true,
    is_email_verified: true,
    email: 'monwater@naver.com',
    has_gender: true,
    gender_needs_agreement: false,
    gender: 'male'
  }
}
```

```
// Kakao 프로필 정보 처리
if (account.provider === "kakao") {
  // console.log("Kakao 프로필 정보:", profile);
  email = (profile as any).kakao_account?.email || user.email;
  name = (profile as any).kakao_account?.profile?.nickname || user.name;
  image = (profile as any).kakao_account?.profile?.profile_image_url || user.image;
}
```