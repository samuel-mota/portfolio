import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { Client } from "@notionhq/client";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./UsefulLinks.module.scss";

interface Properties {
  name: {
    title: [
      {
        plain_text: string;
      }
    ];
  };
  website: {
    id: string;
    url: string;
  };
  platforms: {
    multi_select: [
      {
        id: string;
        name: string;
      }
    ];
  };
  description: {
    rich_text: [
      {
        plain_text: string;
      }
    ];
  };
}

interface DataProps {
  data: {
    results: [
      {
        id: string;
        properties: Properties;
      }
    ];
  };
}

const UsefulLinks = ({ data }: DataProps) => {
  const { results } = data;

  return (
    <Container>
      <div>Useful links</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Platforms</th>
<<<<<<< HEAD
<<<<<<< HEAD
            <th>Description</th>
=======
            <th>Website</th>
>>>>>>> 748ca33... api working on notion, already retrieving information
=======
            <th>Description</th>
>>>>>>> c754f29d37d843428144ddc511d0f0c77de5a333
          </tr>
        </thead>
        <tbody>
          {results.map(({ id, properties }) => (
            <tr key={id}>
              <td>{properties.name.title[0].plain_text}</td>
              <td>
                <a
                  href={properties.website.url}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {properties.website.url}
                </a>
              </td>
              <td>
                {properties.platforms.multi_select.map(({ id, name }) => (
                  <span key={id}>{name}, </span>
                ))}
              </td>
              <td>{properties.description.rich_text[0].plain_text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Container>
  );
};

export default UsefulLinks;

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
  });

  let data = {};

  try {
    data = await notion.databases.query({
      database_id: "58a7dbb5602e42e68c9d70c8f5e07758",
      filter: {
        and: [
          {
            property: "types",
            select: {
              equals: "Develop & Deploy",
            },
          },
          {
            property: "isDeactivated",
            checkbox: {
              equals: false,
            },
          },
        ],
      },
      sorts: [
        {
          property: "name",
          direction: "ascending",
        },
      ],
      page_size: 100, // max=100
    });
  } catch (error) {
    console.error(error.body);
  }

  return {
    props: {
      data,
    },
  };
};