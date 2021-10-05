import typing
from typing import Optional
import strawberry


@strawberry.type
class Post:
    id: int
    host: Optional[str]
    title: str
    podcast: Optional[str]
    content: Optional[str]
    excerpt: Optional[str]
    status: int
    created: str
    updated: str


@strawberry.type
class PostWCursor:
    result: typing.List[Post]
    has_next: bool
    next_cursor: str
