const BLOCKED_LIST = 'blockedList'
const TIME_LIMIT = 'timeLimit'
const TIME_USED = 'time'

// Function for setting the blocked list

export const setBlockedList = (list: string[]) => {
  chrome.storage.local.set({ [BLOCKED_LIST]: list })
}

// Function for getting the blocked list
// Optional callback function to handle the list
// Else just return the list

export const getBlockedList = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([BLOCKED_LIST], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }
      const list = result[BLOCKED_LIST] || []
      resolve(list)
    })
  })
}

export const setTimeLimit = (time: number) => {
  chrome.storage.local.set({ [TIME_LIMIT]: time })
}

export const getTimeLimit = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([TIME_LIMIT], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }
      const time = result[TIME_LIMIT] || 0
      resolve(time)
    })
  })
}

export const setTimeUsed = (time: number) => {
  chrome.storage.local.set({ [TIME_USED]: time })
}

export const getTimeUsed = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([TIME_USED], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }
      const time = result[TIME_USED] || 0
      resolve(time)
    })
  })
}
