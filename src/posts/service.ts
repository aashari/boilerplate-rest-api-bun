import { Post } from "../_mongo/model.post";
import { Context, ResponseDTO } from "../type";
import { PostDTO } from "./dto";

/**
 * Retrieves a list of posts with their associated authors.
 * 
 * @param ctx The context object containing information about the request.
 * @returns A ResponseDTO object containing the status code and the list of posts.
 * @throws If an error occurs during the retrieval process.
 */
export async function postsGetDataList(ctx: Context) {
    try {
        console.log(`[posts/service.ts@postsGetDataList] 🦊 start`);
        const posts = await Post.find().populate("author").catch((error) => {
            console.log(`[posts/service.ts@postsGetDataList] 😨 got error when find: ${error}`, error);
            throw error;
        });
        const normalizedPosts = posts.map((post) => new PostDTO(post.toJSON()));
        return new ResponseDTO({ statusCode: 200, result: normalizedPosts });
    } catch (error) {
        console.log(`[posts/service.ts@postsGetDataList] 😨 got error: ${error}`, error);
        throw error;
    }
}