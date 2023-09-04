export interface Review {
    name: string,
    review: string,
    portraitTag: string
  }
  
export interface Content {
    banner: string,
    description: string,
    ratingSpots: Array<string>,
    reviews: Array<Review>
}
  
export const content:Content = {
banner: '10,000+ of our users love our products.',
description: [
    'We only provide great products combined with excellent customer service.',
    'See what our satisfied customers are saying about our services.'
].join(' '),
ratingSpots: ['Reviews', 'Report Guru', 'BestTech'],
reviews: [
    {
    name: 'Colton Smith',
    review: [
        'We needed the same printed design as the one we had ordered a week prior.',
        'Not only did they find the original order, but we also received it in time.',
        'Excellent!'
    ].join(' '),
    portraitTag: 'colton'
    },
    {
    name: 'Irene Roberts',
    review: [
        'Customer service is always excellent and very quick turn around.',
        'Completely delighted with the simplicity of the purchase and the speed of delivery.'
    ].join(' '),
    portraitTag: 'irene'
    },
    {
    name: 'Anne Wallace',
    review: [
        'Put an order with this company and can only praise them for the very high standard.',
        'Will definitely use them again and recommend them to everyone!'
    ].join(' '),
    portraitTag: 'anne'
    }
]
}