import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAfricaData } from '../../../Redux/world/action'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Footer } from '../../Footer/Footer'
import { WorldNavBar } from '../../Navbar/WorldNavBar'
import { Navbar } from '../../Navbar/Navbar'

const Africa = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { data } = useSelector((state) => state.world, shallowEqual)

  useEffect(() => {
    dispatch(fetchAfricaData())
  }, [dispatch])

  const handleClick = (publishedAt) => {
    history.push(`/world/${publishedAt}`)
  }
  return (
    <>
      <Navbar />
      <BODY_CONTAINER_MAIN_DIV>
        <h1>World</h1>
        <TOP_HEADER_DIV_1>
          {data.slice(0, 1).map((item, index) => (
            <IMG_DIV key={index} onClick={(e) => handleClick(item.publishedAt)}>
              <img src={item.urlToImage} alt='image-1' />
              <span onClick={() => handleClick(item.id)}>{item.id}</span>
            </IMG_DIV>
          ))}
          <LINK_DIV>
            {data.slice(2, 6).map((item, index) => (
              <INSIDE_LINK_DIV key={index}>
                <p onClick={() => handleClick(item.publishedAt)}>
                  {item.title}
                </p>
              </INSIDE_LINK_DIV>
            ))}
          </LINK_DIV>
        </TOP_HEADER_DIV_1>

        <AROUND_DIV_CONTENT>
          {data.slice(2, 4).map((item, index) => (
            <IMG__HEADER key={index}>
              <h2>News and Buzz</h2>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt='image' />
                <h3 onClick={() => handleClick(item.publishedAt)}>
                  {item.title}
                </h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(3, 6).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <p onClick={() => handleClick(item.publishedAt)}>
                      {item.title}
                    </p>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
          <div
            style={{
              width: '300px',
              height: '540px',
              border: '1px solid #ccc',
              overflow: 'auto',
              padding: '10px',
              margin: '10px',
            }}
          >
            <a
              class='twitter-timeline'
              href='https://twitter.com/CNNAfrica?ref_src=twsrc%5Etfw'
            >
              Tweets by CNNAfrica
            </a>
          </div>
        </AROUND_DIV_CONTENT>

        {/* code for Featured sections */}

        <AROUND_DIV_CONTENT>
          {data.slice(5, 7).map((item, index) => (
            <IMG__HEADER key={index}>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt='image' />
                <h3 onClick={() => handleClick(item.publishedAt)}>
                  {item.title}
                </h3>
              </IMG_DIV_2>
            </IMG__HEADER>
          ))}
          {data.slice(9, 10).map((item, index) => (
            <IMG__HEADER key={index}>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt='image' />
                <h3 onClick={() => handleClick(item.publishedAt)}>
                  {item.title}
                </h3>
              </IMG_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>
      </BODY_CONTAINER_MAIN_DIV>
      <Footer></Footer>
    </>
  )
}

export { Africa }

const BODY_CONTAINER_MAIN_DIV = styled.div`
  border: 1px solid #ddd;
  width: 80%;
  display: flex;
  margin: auto;
  color: black;
  flex-direction: column;
  h1 {
    display: flex;
    margin-left: 70px;

    align-items: flex-start;
  }
`
const TOP_HEADER_DIV_1 = styled.div`
  display: flex;
  width: 90%;
  margin: 0px auto;

  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid #ccc; */
  /* justify-content: center; */
`

const IMG_DIV = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 100%;
    height: 450px;
    margin: 0;
  }
  span {
    margin: 10px;
    color: black;
    font-size: 24px;
  }
  span:hover {
    color: red;
    cursor: pointer;
  }
`

const LINK_DIV = styled.div`
  display: flex;
  margin: 0px 20px;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
`

const INSIDE_LINK_DIV = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;
  margin: 5px 0px;
  width: 73%;
  p {
    text-decoration: none;
    color: black;
  }
  p:hover {
    color: red;
    cursor: pointer;
  }
`

const AROUND_DIV_CONTENT = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const IMG_DIV_2 = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  img {
    width: 350px;
    height: 250px;
  }
  h3:hover {
    color: red;
    cursor: pointer;
  }
`

const LINK_DIV_2 = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`

const IMG__HEADER = styled.div`
  display: flex;
  margin: 10px auto;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding: 0px;
    margin: 0px;
    padding: 10px;
  }
`

const INSIDE_LINK_DIV_2 = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;

  text-align: left;
  p {
    text-decoration: none;
    color: black;
  }
  p:hover {
    color: red;
    cursor: pointer;
  }
`
