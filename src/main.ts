import './style.css'
import { createNavbar } from './components/Navbar'
import { createMenu } from './components/Menu'
import { createReviews } from './components/Reviews'
import { createFooter } from './components/Footer'
import { createPrivacyPolicy } from './components/PrivacyPolicy'
import { createTermsOfService } from './components/TermsOfService'

const app = document.querySelector<HTMLDivElement>('#app')!

function render() {
  const path = window.location.pathname

  if (path === '/privacy') {
    app.innerHTML = `
      ${createNavbar()}
      ${createPrivacyPolicy()}
      ${createFooter()}
    `
  } else if (path === '/terms') {
    app.innerHTML = `
      ${createNavbar()}
      ${createTermsOfService()}
      ${createFooter()}
    `
  } else {
    const scrollItem = `
      <span class="scroll-text">PERFECTION IN EVERY BITE</span>
      <img src="/wing1.png" class="wing-icon-centered" />
    `
    const repeatedScroll = Array(100).fill(scrollItem).join('')

    app.innerHTML = `
      ${createNavbar()}
      <section class="hero-section">
        <div class="hero-text">
          <span class="word">DIP</span>
          <span class="word crunch-container">
            <span class="crunch-text">CRUNCH</span>
            <img src="/crumbs.png" alt="crumbs" class="crumbs-img" />
          </span>
          <span class="word italic">GONE</span>
        </div>
        <section class="scroll-section">
          <div class="scroll-track" id="scroll-track">
            ${repeatedScroll}
          </div>
        </section>
      </section>
      <section class="statement-section">
        <div class="statement-text">
          <p>At Wing Lab, we believe every wing tells a story. From fiery heat to sweet and savory glazes, our menu offers something for every palate. Located in the heart of the Junction neighborhood, we're a local favourite where friends, families, and foodies come together.</p>
          <p>We're committed to quality ingredients, excellent service, and bold, unique flavours that keep our customers coming back for more. Welcome to Wing Lab, where we bring the heat—and the flavour—every time!</p>
        </div>
      </section>
      ${createMenu()}
      ${createReviews()}
      ${createFooter()}
    `
    setupHomeListeners()
  }

  setupGlobalListeners()
}

function setupGlobalListeners() {
  // Navbar Menu Button Scroll Logic (Home only)
  const navMenuBtn = document.getElementById('nav-menu-btn')
  navMenuBtn?.addEventListener('click', () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
      render()
      setTimeout(() => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }
  })

  // Order Dropdowns
  const orderBtn = document.getElementById('order-btn')
  const orderDropdown = document.getElementById('order-dropdown')
  const footerOrderBtn = document.getElementById('footer-order-btn')
  const footerOrderDropdown = document.getElementById('footer-order-dropdown')

  orderBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    orderDropdown?.classList.toggle('expanded')
  })

  footerOrderBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    footerOrderDropdown?.classList.toggle('expanded')
  })

  document.addEventListener('click', (e) => {
    if (!orderBtn?.contains(e.target as Node) && !orderDropdown?.contains(e.target as Node)) {
      orderDropdown?.classList.remove('expanded')
    }
    if (!footerOrderBtn?.contains(e.target as Node) && !footerOrderDropdown?.contains(e.target as Node)) {
      footerOrderDropdown?.classList.remove('expanded')
    }
  })

  // SPA Links
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href')
    if (href && href.startsWith('/') && !href.startsWith('http')) {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)
        render()
        window.scrollTo(0, 0)
      })
    }
  })
}

function setupHomeListeners() {
  // Menu Toggle Logic
  const categoryHeaders = document.querySelectorAll('.category-header')
  categoryHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const wrapper = header.parentElement
      const isActive = wrapper?.classList.contains('active')
      
      // Close all other categories
      document.querySelectorAll('.menu-category-wrapper').forEach(w => {
        w.classList.remove('active')
      })

      // Toggle current one
      if (!isActive) {
        wrapper?.classList.add('active')
        
        // Lazy load images in this section
        const images = wrapper?.querySelectorAll('.lazy-menu-image')
        images?.forEach(img => {
          const image = img as HTMLImageElement
          if (image.dataset.src) {
            image.src = image.dataset.src
            image.removeAttribute('data-src')
            image.classList.remove('lazy-menu-image')
          }
        })
      }
    })
  })

  // Combo Toggle Logic
  const menuItems = document.querySelectorAll('.menu-item.has-combo')
  menuItems.forEach(item => {
    const toggleBtns = item.querySelectorAll('.toggle-btn')
    const priceEl = item.querySelector('.item-price')
    const descEl = item.querySelector('.item-description')

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation() // Prevent accordion from closing/opening
        const type = (btn as HTMLElement).dataset.type
        
        // Update buttons
        toggleBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')

        // Update content
        if (type === 'combo') {
          if (priceEl) priceEl.textContent = (item as HTMLElement).dataset.comboPrice || ''
          if (descEl) descEl.textContent = (item as HTMLElement).dataset.comboDesc || ''
        } else {
          if (priceEl) priceEl.textContent = (item as HTMLElement).dataset.singlePrice || ''
          if (descEl) descEl.textContent = (item as HTMLElement).dataset.singleDesc || ''
        }
      })
    })
  })

  // Scroll velocity effect
  const scrollTrack = document.getElementById('scroll-track')
  if (!scrollTrack) return

  let currentScroll = window.scrollY
  let targetScroll = window.scrollY

  const onScroll = () => {
    targetScroll = window.scrollY
  }
  window.addEventListener('scroll', onScroll)

  function animateScroll() {
    if (window.location.pathname !== '/') return
    currentScroll += (targetScroll - currentScroll) * 0.1
    if (scrollTrack) {
      const translateX = currentScroll * 0.8
      scrollTrack.style.transform = `translateX(${translateX}px)`
    }
    requestAnimationFrame(animateScroll)
  }
  animateScroll()
}

window.addEventListener('popstate', render)
render()
