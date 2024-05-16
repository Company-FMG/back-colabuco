app.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    })
    res.json(post)
  })