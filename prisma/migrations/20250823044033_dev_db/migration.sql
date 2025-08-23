-- CreateIndex
CREATE INDEX "Post_id_userId_qtype_idx" ON "Post"("id", "userId", "qtype");

-- CreateIndex
CREATE INDEX "user_id_createdAt_idx" ON "user"("id", "createdAt");
