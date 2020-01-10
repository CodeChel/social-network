
const today = {
    hour: 'numeric',
    minute: 'numeric'
}
const month = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric'
    
}
const year = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric'
   
}
const other = {
    month: 'long',
    year: 'numeric'
}
const yearNews = {
  year: 'numeric',
  day: 'numeric',
  month: 'short',
  hour: 'numeric',
  minute: 'numeric'
 
}
 const formatTime = (date) =>{

    if(isToday(date)) return date.toLocaleString("en-US", today)
    else if(isMonth(date)) return date.toLocaleString("en-US", month)
    else if(isYear(date)) return date.toLocaleString('en-US', year)
    return date.toLocaleString('en-US', other)
}

const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  }
  const isMonth = (date) => {
    const today = new Date()
    return date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  }
  const isYear = (date) => {
    const today = new Date()
    return date.getFullYear() === today.getFullYear()
  }
  export const formatTimeToLastMessage = (date) =>{
    if(isToday(date)) return date.toLocaleString("en-US", today)
    else if(isMonth(date)) return date.toLocaleString("en-US", {month: 'short', day: 'numeric'})
    else if(isYear(date)) return date.toLocaleString('en-US', {month: 'short', day: 'numeric'})
    return date.toLocaleString('en-US', other)
}

export const formatTimeNews = (dateString) =>{
  const date = new Date(dateString)
  return date.toLocaleString("en-US", yearNews)

}
  export default formatTime