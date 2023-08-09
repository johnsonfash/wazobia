import { CONST } from "./constants"

interface UploadRes {
  status: boolean
  message: string
  data?: { url: string }
}

export const uploadFile = async (file: any): Promise<UploadRes> => {
  try {
    const form = new FormData();
    form.append("file", file)
    const res = await fetch(CONST.API_URL + '/upload', {
      method: 'post',
      body: form
    })
    return await res.json();
  } catch (e: any) {
    return e.response
  }
}
