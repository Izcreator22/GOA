import React from "react";
import { useParams } from "react-router-dom";

function TopicPage() {
    const { topicId } = useParams()
    const topics = [
    "Shua Qalaqshi Info",
    "Qerchi Info",
    "Qartuli filmebi Info",
    "Qartuli serialebi Info",
    "Qartuli cekva da stili Info",
    ]

    return (
        <div>
            <h2>{topics[topicId] ? topics[topicId] : "Invalid Topic"}</h2>
            {topics[topicId] && (
                <p>
                    kontenti {topics[topicId]} aq iqneba

                </p>
            )}
        </div>
    )
}

export default TopicPage;