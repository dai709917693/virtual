// 相似程度
const similarity = 0.5
function detectRepeatability(origin: string, target: string) {
  let str = ''
  let targetIndex = null
  let maxLen = 0
  let maxStr = ''
  for (let i = 0; i < origin.length; i++) {
    const item = origin[i]
    if (targetIndex !== null && target[targetIndex + 1] === item) {
      targetIndex += 1
      str += item
    } else {
      str = ''
      targetIndex = null
      const index = target.indexOf(item)
      if (index !== -1) {
        targetIndex = index
        str = item
      }
    }
    if (str && str.length > maxLen) {
      maxLen = str.length
      maxStr = str
    }
  }
  return { maxLen, maxStr }
}
interface Data {
  len: number
  value: string
  str: string
}
export function getSimilarWords(vocList: Record<string, string>) {
  const res: Record<string, Data[]> = {}
  let hasNoSimilarWordsLen = 0
  Object.entries(vocList).forEach(([key]) => {
    let arr: Data[] = []
    const keyLen = key.length
    Object.entries(vocList).forEach(([key2]) => {
      if (key !== key2) {
        const { maxLen, maxStr } = detectRepeatability(key, key2)
        if (maxLen >= keyLen * similarity) {
          arr.push({ len: maxLen, value: key2, str: maxStr })
        }
      }
    })
    arr = quickSort(arr).slice(0, 4)
    if (arr.length > 0) {
      res[key] = arr
    } else {
      hasNoSimilarWordsLen++
    }
  })
  // console.log(hasNoSimilarWordsLen)
  return res
}

function quickSort(arr: Data[]): Data[] {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].len > pivot[0].len) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
