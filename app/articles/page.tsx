import CardArticle from "@/components/card-article"
import Article from "@/models/article";
import picture_template from "@/public/prague_vysehrad.jpg";

function get_test_articles(): Article[] {
    return ([{
        id: 0,
        title: "Photos of Prague",
        author: "Dumbledore",
        description: "Here are a few shots from my travel!",
        front_image: picture_template,
    }, {
        id: 1,
        title: "Me",
        author: "Voldemort",
        description: "Photos of me, just me, always me!!",
        front_image: picture_template
    }])
}

export default function Articles() {
    const articles: Article[] = get_test_articles();

    return (
        <>
            <nav className="w-full primary flex justify-center">
                <div className="w-1/2 py-5 flex justify-between">
                    <div className="flex">
                        <p className="font-bold pr-5">
                            Share your discoveries!
                        </p>
                        <button>Add Article</button>
                    </div>
                    <button>Account</button>
                </div>
            </nav>

            <main className="w-full flex justify-center">
                <section className="w-1/2 flex justify-center">

                    {articles.map((article) => (
                        <div key={article.id} className="w-1/3 px-4 pt-10">
                            <CardArticle article={article} />
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}
