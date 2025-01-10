document.getElementById("copy-btn").addEventListener("click", function () {
  // Get the text from the <p> element
  const addressText = document.getElementById("address-text").innerText

  // Create a temporary input element
  const tempInput = document.createElement("input")
  tempInput.value = addressText
  document.body.appendChild(tempInput)

  // Select the text and copy it to the clipboard
  tempInput.select()
  document.execCommand("copy")

  // Remove the temporary input element
  document.body.removeChild(tempInput)

  // Optional: Alert the user
  alert("Address copied to clipboard!")
})

const sliderInner = document.querySelector(".slider_main .inner")
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")

let currentIndex = 0
const images = document.querySelectorAll(".slider_main .inner img")
const imageWidth = images[0].offsetWidth // Get width of one image

function updateSliderPosition() {
  sliderInner.style.transform = `translateX(-${currentIndex * imageWidth}px)`
}

// Move slider to the left
leftBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0) // Prevent sliding beyond the first image
  updateSliderPosition()
})

// Move slider to the right
rightBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, images.length - 4) // Prevent sliding beyond the last image
  updateSliderPosition()
})

// Update on resize to handle responsiveness
window.addEventListener("resize", () => {
  currentIndex = 0 // Reset index on resize
  updateSliderPosition()
})

// Get all buttons with class 'btnMain'
const buttons = document.querySelectorAll(".btnMain")

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const popupFace = button.querySelector(".popupFace") // Select face image inside the clicked button
    const link = button.querySelector("a").getAttribute("href") // Get the link from the <a> tag inside the button

    // Add bubble animation class to the popupFace
    popupFace.classList.add("bubble")

    // Reset animation after it ends
    popupFace.addEventListener("animationend", () => {
      popupFace.classList.remove("bubble")
    })

    // Redirect to the link from the <a> tag after animation
    setTimeout(() => {
      window.location.href = link
    }, 1000) // Adjust the delay (in milliseconds) to match the animation duration
  })
})

document.getElementById("btnMain").addEventListener("click", function () {
  const popupFace = document.getElementById("popupFace_1")

  // Add bubble animation class
  popupFace.classList.add("bubble")

  // Reset animation after it ends
  popupFace.addEventListener("animationend", () => {
    popupFace.classList.remove("bubble")
  })
  window.location.href =
    "https://app.uniswap.org/swap?outputCurrency=0x614A48C41BE6BA6762B63A92Cc33cFb5E8149332&chain=ethereum"
})
