import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
        console.log("pins: ", pins);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
        console.log("Feed pins: ", pins);
      });
    }
  }, [categoryId]);

  if (loading) {
    return <Spinner message="We Are Adding new Ideas to your feed" />;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
