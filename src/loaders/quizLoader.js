
export const quizLoader = async () => {
    // Get Quiz 
    const quizesData = await fetch('products.json');
    const quizes = await quizesData.json('https://openapi.programming-hero.com/api/quiz')

    return { quizes: quizes };

}