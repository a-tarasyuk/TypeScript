package fourslash_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/fourslash"
	"github.com/microsoft/TypeScript/tsc/internal/ls/lsutil"
	"github.com/microsoft/TypeScript/tsc/internal/lsp/lsproto"
	"github.com/microsoft/TypeScript/tsc/internal/testutil"
)

func TestExportDefer3(t *testing.T) {
	t.Parallel()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `export defer { b } from "./a" with { type: "a", mode: "b" };
export defer { a } from "./a" with { "mode": 'b', type: "a" };
void 0;`
	f, done := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	defer done()
	f.VerifyOrganizeImports(
		t,
		`export defer { a, b } from "./a" with { type: "a", mode: "b" };
void 0;`,
		lsproto.CodeActionKindSourceSortImportsTs,
		&lsutil.UserPreferences{OrganizeImportsSort: lsutil.OrganizeImportsSortOrdinalIgnoreCase},
	)
}
