FROM golang:1.24-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Install Air for live reload
RUN go install github.com/cosmtrek/air@latest

CMD ["air", "-c", ".air.toml"]
