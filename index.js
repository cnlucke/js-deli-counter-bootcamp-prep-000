var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  console.log("Welcome, " + name + ". You are number " + katzDeliLine.length.toString() + " in line.")
  return katzDeliLine.length
}