import React from 'react';
import '../styles/PostYars.css';

const PostBrandsYars = ({ posts, title }) => {
    const rows = [];
    for (let i = 0; i < posts.length; i += 5) {
        rows.push(posts.slice(i, i + 5));
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', position: 'relative', zIndex: '2' }}>{title}</h3>
            {
                rows.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map(post => <NoteYars dictProps={post} key={post.id} />)}
                    </div>
                ))
            }
        </div>
    );
};

const NoteYars = ({ dictProps }) => {
    const { imageUrl, title } = dictProps;

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="image" />
            <h4 >{title}</h4>
        </div>
    );
};


export default PostBrandsYars;
