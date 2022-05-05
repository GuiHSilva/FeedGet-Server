-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "screenshot" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "feedbacks_id_key" ON "feedbacks"("id");
