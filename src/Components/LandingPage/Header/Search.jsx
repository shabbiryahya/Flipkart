// import SearchIcon from '@mui/icons-material/Search';
// import { InputBase, List, ListItem, Box, styled } from '@mui/material';
// import { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const Search=()=>{
//   const [ text, setText ] = useState();
//   const [ open, setOpen ] = useState(true);
//   const [data,setData]=useState();

//   const getText = (text) => {
//       setText(text);
//       setOpen(false)
//   }

//   useEffect(() => {
//    const getData=async()=>{
//     var url = await fetch("https://flipkart-data.onrender.com/electronics");
//     var data1 = await url.json();
//      setData(data1);
//    }
//    getData();
// },[])
//   return (
//     <SearchContainer>
//     <InputSearchBase
//       placeholder="Search for products, brands and more"
//       inputProps={{ 'aria-label': 'search' }}
//       onChange={(e) => getText(e.target.value)}
//     />
//     <SearchIconWrapper>
//       <SearchIcon />
//     </SearchIconWrapper>
//     {
//       text &&
//       <ListWrapper hidden={open}>
//         {
//           data.filter(product => product.description.toLowerCase().includes(text.toLowerCase())).map(product => (
//             <ListItem>
//               <Link
//                 to={`/product/electronics`}
//                 style={{ textDecoration:'none', color:'inherit'}}
//                 onClick={() => setOpen(true)}
//               >
//                 {product.description}
//               </Link>
//             </ListItem>
//           ))
//         }
//       </ListWrapper>
//     }
// </SearchContainer>
//   )

// }

// const SearchContainer = styled(Box)`
//   border-radius: 2px;
//   margin-left: 10px;
//   width: 38%;
//   background-color: #fff;
//   display: flex;
// `;

// const SearchIconWrapper = styled(Box)`
//   margin-left: auto;
//   padding: 5px;
//   display: flex;
//   color: blue;
// `;

// const ListWrapper = styled(List)`
//   position: absolute;
//   color: #000;
//   background: #FFFFFF;
//   margin-top: 36px;
// `;

// const InputSearchBase = styled(InputBase)`
//   font-size: unset;
//   width: 100%;
//   padding-left: 20px;
// `;

// export default Search;

// // to={`/product/electronics/${product.item_id}`}

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);
  const [data, setData] = useState();

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      var url = await fetch('https://flipkart-data.onrender.com/all');
      var data1 = await url.json();
      setData(data1);
    };
    getData();
  }, []);
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon style={{cursor:"pointer"}} />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {data
            .filter((product) =>
              product.description.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/singleproduct/15`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => setOpen(true)}
                >
                  {product.description}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)(({ theme }) => ({
  borderRadius: '2px',
  marginLeft: '10px',
  width: '38%',
  backgroundColor: '#fff',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    visibility: 'hidden',
  },
}));

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

export default Search;

// to={`/product/electronics/${product.item_id}`}
