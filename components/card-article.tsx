import Article from "@/models/article"
import Image from "next/image"

interface CardArticleProps {
    article: Article
}

export default function CardArticle({ article }: CardArticleProps) {
    return (
        <div className="w-full shadow-md" >
            <h2 className="secondary text-center p-3">{article.title}</h2>
            <Image
                src={article.front_image}
                alt="article front image"
            />
            <div className="p-3">
                <p>{article.description}</p>
                <p className="text-right">By {article.author}</p>
            </div>
        </div>
    )
};
