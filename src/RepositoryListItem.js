import React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

export default createFragmentContainer(
  RepositoryListItem,
  graphql`
    fragment RepositoryListItem_repository on Repository {
      name
      createdAt
      url
      owner {
        login
      }
      url
    }
  `
)

function RepositoryListItem({repository}) {
  return (
    <li className="list-group-item">
      <p>
        {repository.createdAt}
      </p>
      <p>
        {repository.name}
      </p>
      <a href={repository.url} >{repository.url}</a>
    </li>
  )
}
