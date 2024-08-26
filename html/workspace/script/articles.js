
const fetchData = async () => {

            let articlesDiv = document.querySelector('.articles')  // Getting the div '.articles from the DOM'
            articlesDiv.innerText = 'Loading'
            const data = await fetch("https://jsonplaceholder.typicode.com/posts") // Your url
            const jsonArticles = await data.json()
            articlesDiv.innerText = ''
            console.log(jsonArticles)

            
            for(let article of jsonArticles){
               /* 

            2 choices, using direct HTML strings or creating object

               Choice 1: using direct HTML strings: Dirty but fast
               
               articlesHtml += ` 
                <article onclick="alert('Hello')"">
                    <header>
                        <h3>${article.title}</h3>
                    </header>
                    <p>${article.body}</p>
                    <footer>
                        <button>Save article</button>
                    </footer>
                </article>`*/
                
                // Choice 2 : using object creation: less dirty but longer.

                let articleElem = document.createElement('article') // Create an orphan <article>
                let headerElem = document.createElement('header')// Create an orphan <header>
                let h3Elem = document.createElement('h3') // Create an orphan <h3>
                
                let p = document.createElement('p') // Create an orphan <p>
                p.innerText = article.body // Set the content of the p the body of the article
                let footer = document.createElement('footer') // Create an orphan <footer>
                let button = document.createElement('button') // Create an orphan <button>
                button.innerText = 'Save article' // Set the content of the button a text.

                footer.append(button) // give <footer> the button (from: <footer> ===> to: <footer><button>Save article</button></footer>)
                h3Elem.append(article.title) //Give text to H3
                headerElem.append(h3Elem) // Insert <h3> in <header>
                articleElem.append(headerElem) // Insert <header> in <article>
                articleElem.append(p) // Insert <p> in <article>
                articleElem.append(footer) // Insert <footer> in <article>
                articlesDiv.append(articleElem) // Insert <article> in the existing .articles (look at line 82)
            }

        }
       fetchData()