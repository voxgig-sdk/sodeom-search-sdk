package core

type SodeomSearchError struct {
	IsSodeomSearchError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSodeomSearchError(code string, msg string, ctx *Context) *SodeomSearchError {
	return &SodeomSearchError{
		IsSodeomSearchError: true,
		Sdk:              "SodeomSearch",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SodeomSearchError) Error() string {
	return e.Msg
}
