import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertpp = () => {

    const [categories, setCategories] = useState(['One Piece', ]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories])
    }


    const apiKey = 'mhoZqAQ9MrRT5LQkr47opAfw4ZtPNdrc';
    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory }
            />

            {
                categories.map(category => (
                    <GifGrid key={category}
                            category={category} />
                ))
            }

        </>
    )
}
