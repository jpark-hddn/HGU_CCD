/**
 * 데이터 소스 스위치
 * - API_BASE_URL 이 없거나 USE_MOCK=true 면 src/data 의 더미 데이터 사용
 * - 백엔드 붙으면 .env.local 에 API_BASE_URL(서버 주소, 끝에 / 와 /api 제외) 넣고 USE_MOCK=false
 * - 이미지·영상이 API 서버와 다른 곳(S3 등)에 있으면 IMAGE_BASE_URLS 에 그 주소 (쉼표로 여러 개, next.config.ts)
 * (서버 컴포넌트에서만 호출하므로 NEXT_PUBLIC_ 접두사 불필요)
 */
export const USE_MOCK = process.env.USE_MOCK !== "false" || !process.env.API_BASE_URL;

export class ApiError extends Error {
  constructor(
    public readonly path: string,
    public readonly status: number,
    statusText: string,
  ) {
    super(`API ${path} 요청 실패: ${status} ${statusText}`);
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${process.env.API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new ApiError(path, res.status, res.statusText);
  return res.json() as Promise<T>;
}

/** 404 면 null, 그 외 오류는 그대로 throw (서버 장애를 "없는 페이지"로 숨기지 않도록) */
export async function apiGetOrNull<T>(path: string): Promise<T | null> {
  try {
    return await apiGet<T>(path);
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null;
    throw e;
  }
}
