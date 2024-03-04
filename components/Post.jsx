import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0,0,0,0.2);

`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDetais = styled.View`
 justify-content: center;
 flex: 1;
`;

const PostDate = styled.Text`
  font-size: 13px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if (str.length > 50) {
    return str.substring(0,50) + '...'
  }

  return str
}

export const Post = ({title, imageUrl, createdAt}) => {
    return <PostView>
        <PostImage
          source={{ uri: imageUrl}}
        />
        <PostDetais>
          <PostTitle>{truncateTitle(title)}</PostTitle>
          <PostDate>{new Date(createdAt). toLocaleDateString()}</PostDate>
        </PostDetais>
        
      </PostView>
}