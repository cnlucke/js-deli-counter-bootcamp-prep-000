var katzDeli = []
katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length.toString() + " in line.")
}

katzDeliLine = []

function nowServing() {
  if katzDeliLine.length > 0 {
    return katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}
