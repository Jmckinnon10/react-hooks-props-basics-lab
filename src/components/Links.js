import React from 'react';

function Links(props) {
  const linkedin = props.user.links.linkedin
  const gitHub = props.user.links.github
  return (
    <div>
      <h3>Links</h3>
      <a href={gitHub}>{gitHub}</a>
        <br/>
      <a href={linkedin}>{linkedin}</a>
    </div>
  )
}

export default Links;