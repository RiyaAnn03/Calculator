// display content in calculator screen
function displayContent(content) {
    result.value+=content
    
}
// clear cal;culator screen
function calScreenClear() {
    result.value=""
    
}
function calOutput() {
result.value=eval(result.value)    
    
}
function removelastDigit() {
  result.value=  result.value.slice(0,-1)
    
}
