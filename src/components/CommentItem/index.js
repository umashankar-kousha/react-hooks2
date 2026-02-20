import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
  DeleteBtn,
} from './styledComponents'

const CommentItem = props => {
  const {commentDetails, deleteComment} = props
  const {id, name, commentText} = commentDetails
  const onDeleteOnComment = () => {
    deleteComment(id)
  }

  return (
    <>
      <ListItem>
        {name && <Avatar>{name[0].toUpperCase()}</Avatar>}
        <NameAndCommentContainer>
          <NameText>{name}</NameText>
          <CommentText>{commentText}</CommentText>
        </NameAndCommentContainer>
        <DeleteBtn onClick={onDeleteOnComment}>Delete</DeleteBtn>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
