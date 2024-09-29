import * as z from "zod";

const leaveReviewSchema = z.object({
    rating: z.number().min(0).default(0),
    comment: z.string().min(1),
});

export default leaveReviewSchema;
