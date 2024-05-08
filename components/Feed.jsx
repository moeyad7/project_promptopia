'use client'
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);


  const [allPosts, setAllPosts] = useState([])



  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();
      setAllPosts(data);
    }

    fetchPosts();
  }, [])

  const filterPrompts = (searchText) => {
    return allPosts.filter((post) => {
      return post.tag.includes(searchText) || post.creator.username.includes(searchText) || post.prompt.includes(searchText);
    });
  };

  // const filterPrompts = (searchText) => {
  //   const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
  //   return allPosts.filter(
  //     (item) =>
  //       regex.test(item.creator.username) ||
  //       regex.test(item.tag) ||
  //       regex.test(item.prompt)
  //   );
  // };


  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
    const searchResult = filterPrompts(tag);
    setSearchedResults(searchResult);
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ):(<PromptCardList
        data={allPosts}
        handleTagClick={handleTagClick}
      />)}
    </section>
  )
}

export default Feed