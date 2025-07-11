export const uploadToImgBB = async (file: File): Promise<string> => {
  const key = import.meta.env.VITE_IMGBB_KEY;         
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (!data.success) throw new Error('ImgBB upload failed');

  return data.data.url as string;
};