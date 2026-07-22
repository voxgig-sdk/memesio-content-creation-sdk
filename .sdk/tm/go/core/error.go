package core

type MemesioContentCreationError struct {
	IsMemesioContentCreationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMemesioContentCreationError(code string, msg string, ctx *Context) *MemesioContentCreationError {
	return &MemesioContentCreationError{
		IsMemesioContentCreationError: true,
		Sdk:              "MemesioContentCreation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MemesioContentCreationError) Error() string {
	return e.Msg
}
