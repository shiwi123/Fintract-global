import Link from 'next/link';
import Head from "next/head";
import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Careers from '../../components/careers';

export default function Career() {
  return (
    <>
       <Head>
        <title>Fintract Global</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Adamina&family=Jost:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
         <link rel="stylesheet" href="css/ionicons.min.css" />
        {/* CAROUSEL LINK */}
        
        
        
        <script type="text/javascript" src=""></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        ></script>
      </Head>
      <Header imageurl="/career/header img.png" styleName="nav-career"/>
      <Careers/>
      <Footer/>
     
    </>
  );
}