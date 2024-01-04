import Elysia from "elysia";

import { postsGetDataList } from "./service";

/**
 * Represents the REST API endpoint for posts.
 * @returns {Elysia} The Elysia instance for the posts endpoint.
 */
export default new Elysia({ prefix: `/posts` })
    .get(`/`, postsGetDataList)
    .listen(process.env.PORT || 3000);