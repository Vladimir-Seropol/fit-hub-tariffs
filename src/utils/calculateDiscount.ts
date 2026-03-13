export const calculateDiscount = (
  full: number,
  price: number
) => {
  const percent = ((full - price) / full) * 100
  return Math.round(percent)
}