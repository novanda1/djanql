import typing
import strawberry


@strawberry.type
class Post:
    id: int
    host: str
    title: str
    podcast: str
    content: str
    excerpt: str
    status: int
    created: str
    updated: str


@strawberry.type
class PostWCursor:
    result: typing.List[Post]
    has_next: bool
    next_cursor: str
