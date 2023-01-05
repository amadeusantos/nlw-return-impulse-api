-- CreateTable
CREATE TABLE "feeddbacks" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT,

    CONSTRAINT "feeddbacks_pkey" PRIMARY KEY ("id")
);
