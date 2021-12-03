export const flattenMenu = (menuList: any[]) => {
  const result: any[] = []
  menuList.forEach((item: any) => {
    const { children } = item
    if (children) {
      result.push(...children)
    }
  })
  return result
}
