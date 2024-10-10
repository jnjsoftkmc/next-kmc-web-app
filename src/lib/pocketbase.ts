import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090');

export async function authenticateAdmin() {
  try {
    await pb.admins.authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PW!
    );
    console.log("PocketBase 관리자 인증 성공");
  } catch (error) {
    console.error("PocketBase 관리자 인증 실패:", error);
    throw error;
  }
}

export default pb;