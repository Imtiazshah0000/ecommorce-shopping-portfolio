// Initialize Lucide Icons
lucide.createIcons();

// 1. Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        gsap.to(navbar, { backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px 40px', duration: 0.3 });
    } else {
        navbar.classList.remove('scrolled');
        gsap.to(navbar, { backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '15px 40px', duration: 0.3 });
    }
});

// 2. Cart Sidebar Toggle
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');

if (cartToggle && cartSidebar) {
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        gsap.to(cartSidebar, { right: 0, duration: 0.8, ease: "expo.out" });
    });
}

if (closeCart && cartSidebar) {
    closeCart.addEventListener('click', () => {
        gsap.to(cartSidebar, { right: -500, duration: 0.8, ease: "expo.in", onComplete: () => cartSidebar.classList.remove('open') });
    });
}

// 3. Category Data for "Lumina Fashion"
const categoryData = {
    men: {
        title: "Men's Clothing",
        desc: "Dark luxury masculine fashion for the modern man.",
        link: "men-fashion.html",
        products: [
            { name: "Urban Stealth Jacket", price: "$280.00", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600" },
            { name: "Premium Denim", price: "$120.00", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600" },
            { name: "Phantom Sneakers", price: "$250.00", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" },
            { name: "Titan Chrono Watch", price: "$850.00", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" },
            { name: "Elite Leather Belt", price: "$85.00", img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=600" },
            { name: "Midnight Hoodie", price: "$140.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600" },
            { name: "Tech Joggers", price: "$95.00", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" },
            { name: "Classic Polo", price: "$75.00", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    jewellery: {
        title: "Luxury Jewellery",
        desc: "Golden excellence crafted for the elite and elegant.",
        link: "jewellery.html",
        products: [
            { name: "Diamond Cascade Necklace", price: "$4,500.00", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" },
            { name: "Celestial Pearl Earrings", price: "$1,200.00", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" },
            { name: "Royal Gold Bracelet", price: "$2,800.00", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
            { name: "Sapphire Dream Ring", price: "$3,200.00", img: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=600" },
            { name: "Emerald Elite Watch", price: "$5,800.00", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600" },
            { name: "Platinum Love Band", price: "$1,500.00", img: "https://images.unsplash.com/photo-1605100804763-247f67b3f41e?auto=format&fit=crop&q=80&w=600" },
            { name: "Ruby Halo Earrings", price: "$1,850.00", img: "https://images.unsplash.com/photo-1588444839799-318395538448?auto=format&fit=crop&q=80&w=600" },
            { name: "Golden Link Chain", price: "$950.00", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    kids: {
        title: "Kids Fashion",
        desc: "Playful and colorful styles for the little trendsetters.",
        link: "kids-fashion.html",
        products: [
            { name: "Lumina Junior Hoodie", price: "$65.00", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=600" },
            { name: "Petite Couture Dress", price: "$120.00", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=600" },
            { name: "Little Legend Blazer", price: "$150.00", img: "https://images.unsplash.com/photo-1503910368127-b52881ee8b2d?auto=format&fit=crop&q=80&w=600" },
            { name: "Urban Kid Kicks", price: "$85.00", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=600" },
            { name: "Rainbow Sun Hat", price: "$25.00", img: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&q=80&w=600" },
            { name: "Starry Pajama Set", price: "$45.00", img: "https://images.unsplash.com/photo-1520626337972-ebf863448db6?auto=format&fit=crop&q=80&w=600" },
            { name: "Plush Bear Toy", price: "$35.00", img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&q=80&w=600" },
            { name: "Graphic Tee Set", price: "$50.00", img: "https://images.unsplash.com/photo-1519235108051-1997bfdb62d8?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    cosmetics: {
        title: "Ladies Cosmetics",
        desc: "Premium beauty and skincare for a radiant glow.",
        link: "ladies-cosmetics.html",
        products: [
            { name: "Velvet Matte Lipstick", price: "$35.00", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600" },
            { name: "Radiance Skincare Kit", price: "$180.00", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600" },
            { name: "Midnight Oud Perfume", price: "$250.00", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" },
            { name: "Silk Touch Foundation", price: "$65.00", img: "https://images.unsplash.com/photo-1481325545291-94394fe1cf95?auto=format&fit=crop&q=80&w=600" },
            { name: "Golden Glow Face Oil", price: "$90.00", img: "https://images.unsplash.com/photo-1552048544-580430a7d42e?auto=format&fit=crop&q=80&w=600" },
            { name: "Diamond Nail Polish", price: "$20.00", img: "https://images.unsplash.com/photo-1630329486212-7090b7931671?auto=format&fit=crop&q=80&w=600" },
            { name: "Lash Define Mascara", price: "$30.00", img: "https://images.unsplash.com/photo-1512495952136-1e967a5b672c?auto=format&fit=crop&q=80&w=600" },
            { name: "Blush Bloom Palette", price: "$55.00", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    ladies: {
        title: "Ladies Clothing",
        desc: "Elegant and trendy couture for every occasion.",
        link: "ladies-fashion.html",
        products: [
            { name: "Silk Evening Gown", price: "$1,200.00", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600" },
            { name: "Starlight Cocktail Dress", price: "$850.00", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600" },
            { name: "Ethereal Summer Set", price: "$450.00", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600" },
            { name: "Designer Trench Coat", price: "$520.00", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=600" },
            { name: "Cashmere Wrap Shawl", price: "$320.00", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600" },
            { name: "Modern Blazer", price: "$280.00", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600" },
            { name: "Royal Abaya", price: "$450.00", img: "https://images.unsplash.com/photo-1564594735313-b406b607066a?auto=format&fit=crop&q=80&w=600" },
            { name: "Stiletto Heels", price: "$350.00", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    accessories: {
        title: "Shoes & Accessories",
        desc: "The final touch to your premium lifestyle.",
        link: "shoes-accessories.html",
        products: [
            { name: "Luxe Handbag", price: "$1,450.00", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600" },
            { name: "Aviator Gold Shades", price: "$180.00", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600" },
            { name: "Chelsea Suede Boots", price: "$210.00", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" },
            { name: "Urban Backpack", price: "$320.00", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600" },
            { name: "Classic Fedors Cap", price: "$55.00", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=600" },
            { name: "Infinity Leather Belt", price: "$120.00", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600" },
            { name: "Titanium Sport Watch", price: "$450.00", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" },
            { name: "Signature Wallet", price: "$95.00", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" }
        ]
    }
};

const productModal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-category-title');
const modalDesc = document.getElementById('modal-category-desc');
const modalProductsGrid = document.getElementById('modal-products');

// Global Image Error Handler
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80&w=600";
    img.classList.add('image-fallback');
}

// Attach error handler to all images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
});

function openCategory(catKey) {
    const data = categoryData[catKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalProductsGrid.innerHTML = '';

    data.products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'modal-product-card';
        card.innerHTML = `
            <div class="modal-product-img">
                <img src="${p.img}" alt="${p.name}" onerror="handleImageError(this)">
            </div>
            <div class="modal-product-info">
                <h4>${p.name}</h4>
                <div class="modal-price-row">
                    <span class="price">${p.price}</span>
                    <button class="modal-add-btn add-to-cart">Add to Bag</button>
                </div>
            </div>
        `;
        modalProductsGrid.appendChild(card);
    });

    productModal.style.display = 'flex';
    gsap.from(".modal-container", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
    lucide.createIcons();
    attachAddHandlers();
}

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        gsap.to(".modal-container", { scale: 0.8, opacity: 0, duration: 0.3, onComplete: () => productModal.style.display = 'none' });
    });
}

// 4. Wishlist Heart Animation
function initWishlist() {
    const wishBtns = document.querySelectorAll('.wish-btn, .wishlist-btn');
    wishBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = btn.querySelector('i');
            icon.classList.toggle('fill-heart');
            gsap.fromTo(btn, { scale: 1 }, { scale: 1.5, duration: 0.2, yoyo: true, repeat: 1, ease: "back.out" });
        });
    });
}
initWishlist();

// 5. Add to Cart Logic
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');

function attachAddHandlers() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            cartCount++;
            if (cartCountEl) cartCountEl.textContent = cartCount;

            const particle = document.createElement('div');
            particle.style.cssText = `position:fixed; top:${e.clientY}px; left:${e.clientX}px; width:15px; height:15px; background:var(--neon-cyan); border-radius:50%; z-index:10000; box-shadow:0 0 10px var(--neon-cyan);`;
            document.body.appendChild(particle);
            
            const cartIcon = document.querySelector('.cart-btn');
            if (cartIcon) {
                const cartIconRect = cartIcon.getBoundingClientRect();
                gsap.to(particle, { x: cartIconRect.left - e.clientX + 10, y: cartIconRect.top - e.clientY + 10, scale: 0.2, opacity: 0.5, duration: 0.8, ease: "power2.inOut", onComplete: () => {
                    document.body.removeChild(particle);
                    gsap.fromTo(cartIcon, { scale: 1 }, { scale: 1.4, duration: 0.1, yoyo: true, repeat: 1 });
                }});
            }
        });
    });
}
attachAddHandlers();

// 6. Search Bar Focus Effect
const searchInput = document.querySelector('.search-bar input');
const searchBar = document.querySelector('.search-bar');
if (searchInput && searchBar) {
    searchInput.addEventListener('focus', () => gsap.to(searchBar, { width: '250px', borderColor: 'var(--neon-cyan)', duration: 0.4 }));
    searchInput.addEventListener('blur', () => gsap.to(searchBar, { width: '180px', borderColor: 'var(--glass-border)', duration: 0.4 }));
}

// 7. Particle Background Initialization (if library loaded)
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00838f" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.1, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00838f", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

// 8. Preloader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        gsap.to(loader, { opacity: 0, duration: 1, onComplete: () => loader.style.display = 'none' });
    }
});
