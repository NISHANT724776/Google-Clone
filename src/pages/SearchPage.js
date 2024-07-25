import React from 'react';
import "./SearchPage.css";
import { useStateValue } from './StateProvider';
import UseGoogleSearch from "./UseGoogleSearch";
import Response from './response';
import {Link} from "react-router-dom";
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    const [{term='Tesla'}, dispatch] = useStateValue();
  // live api call 
    const {data} = UseGoogleSearch(term);

    // mock api call 
    // const data = Response;

    console.log(data);
  return (
    <div className='searchPage'>
        <div className="searchPage__header">
           <Link to="/">
           <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" className='searchPage__logo'/>
           </Link>
           <div className="searchPage__headerBody">
            <Search hideButtons/>
            <div className="searchPage__options">
              <div className="searchPage__optionsleft">
               <div className="searchPage__option">
               <SearchIcon/>
                <Link to="/all">All</Link>
               </div>
               <div className="searchPage__option">
               <DescriptionIcon/>
                <Link to="/news">news</Link>
               </div>
               <div className="searchPage__option">
               <ImageIcon/>
                <Link to="/Images">Images</Link>
               </div>
               <div className="searchPage__option">
               <LocalOfferIcon/>
                <Link to="/shopping">shopping</Link>
               </div>
               <div className="searchPage__option">
               <AddLocationAltIcon/>
                <Link to="/maps">maps</Link>
               </div>
               <div className="searchPage__option">
               <MoreVertIcon/>
                <Link to="/more">more</Link>
               </div>
              </div>  
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to ="/setting">Setting</Link>
                </div>
                <div className="searchPage__option">
                  <Link to ="/tools">Tools</Link>
                </div>
              </div>
            </div>
           </div>
        </div>
        {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation?.formattedTotalResults} result ({data?.searchInformation?.formattedSearchTime} seconds) for {term} 
          </p>
          {data?.items.map((item)=>(
            <div className="sesrchPage__result">
              <a href={item.link} className='searchpage__resultLink'>
                {item.pagemap?.cse_image?.length > 0 && 
                item.pagemap?.cse_image[0]?.src && (
                  <img src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}  className="searchPage__resultImage" />
                )}
                
              {item.displayLink}
              </a>
              <a href={item.link} className='searchPage__resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className="sarchPage__resultSnippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>

        )}
      
    </div>
  )
}

export default SearchPage
