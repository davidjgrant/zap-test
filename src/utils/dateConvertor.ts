export const dateConvertor = (date: string, options: any) => {
  //  @ts-ignore
  return new Date(date).toLocaleDateString('en-US', options);
}