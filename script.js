news_data = [
    {
        img: '/images/news1.webp',
        detail: 'Successfully Conducted!Organized by Jivan Jyot Trust, Amroli in collaboration with QuadQuantum Pvt. Ltd. and S.P. University, the seminar enlightened students on the vast opportunities in the Semiconductor Ecosystem.',
        date: '15-july-2025'
    },
    {
        img: '/images/news2.webp',
        detail: 'Excellence Prize Distribution 🎖️ Held on 11th July 2025 at Amroli Colleges under Jivan Jyot Trust, this grand event celebrated our NCC Cadets and academically meritorious students.',
        date: '15-july-2025'
    },
    {
        img: '/images/news3.webp',
        detail: 'Excellence Prize Distribution 🎖️ Held on 11th July 2025 at Amroli Colleges under Jivan Jyot Trust, this grand event celebrated our NCC Cadets and academically meritorious students.',
        date: '10-july-2025'
    },

]

event_data = [
    {
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOQvp_98iUIy-s1kCgU6GA3X6WL-Iu880fMt948H5WoGgAJPJDYN5fyNKTYnR7jpTXSa9pttwGUS6OVX3Gdsr-Sey_48OslH8fWZb9FWlCXa44_eMeICx4ta6wvTBjbCff-YKfkZ6U_ONb57gqCxk9ENA=w621-h878-s-no-gm?authuser=1',
        title: 'Gurupurnima Celebration',
        date: '10-july-2025',
        link: 'https://photos.app.goo.gl/g7GzWPy28NqcbeNF6'
    },
    {
        img: 'https://lh3.googleusercontent.com/pw/AP1GczM7pE1s_AIkHwYaK7UtBdCicddua9uzh-xfrht6C75QhYlA8jrkQ2LGezmNu4SxrcAnQrUOgvOy4woMEe3GhsVawzTyzJvtcxBfZpWnkUuxtJqFPoFwcfty18CGCroAJvQoaNmTUR-LTtWfeDdm-EoPLg=w627-h878-s-no-gm?authuser=1',
        title: 'BCA Farewell Party',
        date: '25 Feb 2025',
        link: 'https://photos.app.goo.gl/sbXLvqYMSSKkBCEM7'
    },
    {
        img: 'https://lh3.googleusercontent.com/pw/AP1GczMgs60sRSl6VGgdDj01D-VH5_3B9XOTJJClhHeAlfPcUuy7h1eCgDpqUl8zdwDbuLctYEB24dWUsPhWh6_sLqyZIT7aQiCrTdzhNsqj_zhFWL1wLelBiyQQc6hFXzcG6yrJD-hE7x3GJ_WuTyfp4uydzg=w494-h878-s-no-gm?authuser=1',
        title: 'Suit and Saree Day Celebration ',
        date: '31 Dec 2024',
        link: 'https://photos.app.goo.gl/hKX4kHF3kWrLxifj8'
    },
]

render_data_news = news_data.map((item) => {
    return (
        `
                    <div class="shadow-xl rounded-lg p-5 bg-white relative hover:-translate-y-1 duration-200 ease-in">
                <img src="${item.img}" 
                alt='img'
                class="w-full h-fit object-cover rounded-sm border font-mono ">
            <p class=" winky-rough text-gray-600"> ${item.detail}</p>
            <span class="absolute bottom-1 right-0 px-10 text-xs font-semibold text-[#00ADB5]">
                ${item.date}</span>
            </div>
                    `
    )
}).join('')



document.getElementById('news_data').innerHTML = render_data_news

render_data_events = event_data.map((item) => {
    return `
        <div class="shadow-xl p-5 bg-white rounded-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
            <div class="h-100 overflow-hidden mb-4 rounded-md">
                <img src="${item.img}" 
                     alt="${item.title}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            
            <div class="flex-grow">
                <h3 class="font-bold text-lg text-[#0f7d83] mb-1">${item.title}</h3>
                <p class="text-sm text-gray-500 mb-3">${item.date}</p>
            </div>
            
            <div class="pt-3 border-t border-gray-200 text-right">
                <a href="${item.link}" target="_blank"
                   class="inline-block bg-[#00ADB5] hover:bg-[#0f7d83] text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm">
                    See Photos
                </a>
            </div>
        </div>
    `;
}).join('');

document.getElementById('event-data').innerHTML = render_data_events


document.getElementById('inquiryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const form = event.target;
    const allFieldsValid = form.checkValidity();

    if (allFieldsValid) {
        alert('Message sent successfully');
        form.reset(); 
    } else {
        alert('Please fill in all the required fields.');
        form.reportValidity();
    }
});
