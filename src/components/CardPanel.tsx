"use client"
import Card from "@/components/Card";

import {useReducer} from "react";

export default function CardPanel() {

    const cardReducer = (
        venueList: Map<string, number>,
        action: {type: string; venueName: string; rating?: number}
    )=>{
        const newVenueList = new Map(venueList);
        switch(action.type){
            case 's':
                newVenueList.set(action.venueName, action.rating??0);
                return newVenueList;
            case 'a':
                newVenueList.delete(action.venueName);
                return newVenueList;
            default:
                return venueList;
        }
        
    }
    const [venueList, dispatch] = useReducer(cardReducer, new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
      ]));

    const handleRatingChange = (venueName: string, rating: number) => {
        dispatch({ type: "s", venueName, rating });
    };
    
    return (
        <main>
            <div>
                <div className="m-5 flex flex-row content-around, justify-around flex-wrap">
                    <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg' onRating={handleRatingChange}/>
                    <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg' onRating={handleRatingChange}/>
                    <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg' onRating={handleRatingChange}/>
                </div>
            </div>
            <div className="w-full text-2xl font-medium">Venue List with Ratings : {venueList.size}</div>
            <div>
                {Array.from(venueList).map(([venueName, rating]) => (
                    <div data-testid={venueName} key={venueName} className="text-xl"
                    onClick={()=>dispatch({type:"a", venueName, rating:0})}>
                        {venueName} : {rating}
                    </div>
                ))}
            </div>
            
        </main>
    );
}