import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Intelligent Industrial Chatbot',
        projectDesc: 'Development of a smart chatbot for querying industrial data using Microsoft Bot Framework and RAG API.',
        tags: ['Python', 'Microsoft Bot Framework', 'RAG', 'API Integration'],
        code: 'https://github.com/yourusername/industrial-chatbot',
        demo: 'https://yourdemo-link.com/chatbot',
        image: one
    },
    {
        id: 2,
        projectName: 'Stock Management Prediction',
        projectDesc: 'Predictive analysis project for stock management using various ML models and Power BI visualizations.',
        tags: ['Python', 'SVR', 'ARIMA', 'Prophet', 'Random Forest', 'Power BI'],
        code: 'https://github.com/yourusername/stock-prediction',
        demo: 'https://yourdemo-link.com/stock-prediction',
        image: two
    },
    {
        id: 3,
        projectName: 'NLP for Darija',
        projectDesc: 'Dataset preparation and NLP model training for Moroccan Arabic (Darija) with web scraping and TensorFlow.',
        tags: ['Python', 'TensorFlow', 'NLP', 'Web Scraping', 'BeautifulSoup'],
        code: 'https://github.com/yourusername/darija-nlp',
        demo: 'https://yourdemo-link.com/darija-nlp',
        image: three
    },
    {
        id: 4,
        projectName: 'Breast Cancer Screening App',
        projectDesc: 'CNN-based application for mammogram classification with DenseNet201, VGG16, and VGG19 architectures.',
        tags: ['Python', 'TensorFlow', 'CNN', 'DenseNet201', 'Flask', 'Bootstrap'],
        code: 'https://github.com/yourusername/breast-cancer-app',
        demo: 'https://yourdemo-link.com/breast-cancer-app',
        image: four
    },
    {
        id: 5,
        projectName: 'Sentiment Analysis',
        projectDesc: 'Sentiment analysis of Amazon reviews using VADER and RoBERTa models for classification.',
        tags: ['Python', 'NLP', 'VADER', 'RoBERTa', 'Sentiment Analysis'],
        code: 'https://github.com/yourusername/sentiment-analysis',
        demo: 'https://yourdemo-link.com/sentiment-analysis',
        image: five
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/